describe('Artists Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/artists**', { fixture: 'artists.json' }).as('getArtists');
    cy.intercept('GET', '**/artists/*', { fixture: 'artist-details.json' }).as('getArtistDetails');
    cy.intercept('GET', '**/artists/*/albums**', { fixture: 'artist-albums.json' }).as('getArtistAlbums');
    cy.intercept('GET', '**/artists/*/top-tracks**', { fixture: 'artist-tracks.json' }).as('getArtistTracks');
  });

  it('deve navegar da lista de artistas para os detalhes do artista', () => {
    cy.visitArtistsList();

    cy.wait('@getArtists');
    cy.waitForArtistsToLoad();

    cy.get('[data-testid="artist-card"]')
      .should('have.length.greaterThan', 0)
      .first()
      .should('contain.text', 'Artista')
      .should('be.visible');

    cy.clickFirstArtist();

    cy.wait('@getArtistDetails');
    cy.wait('@getArtistAlbums');
    cy.wait('@getArtistTracks');

    cy.waitForArtistDetailsToLoad();

    cy.get('[data-testid="artist-name"]').should('be.visible').should('not.be.empty');

    cy.get('[data-testid="artist-followers"]').should('be.visible').should('contain.text', 'seguidores');

    cy.get('[data-testid="artist-albums"]').should('be.visible');

    cy.get('[data-testid="artist-tracks"]').should('be.visible');

    cy.get('[data-testid="album-card"]').should('have.length.greaterThan', 0);

    cy.get('[data-testid="track-item"]').should('have.length.greaterThan', 0);
  });

  it('deve exibir informações corretas do artista selecionado', () => {
    cy.visitArtistsList();
    cy.wait('@getArtists');
    cy.waitForArtistsToLoad();

    cy.get('[data-testid="artist-card"]')
      .first()
      .within(() => {
        cy.get('[data-testid="artist-name"]').invoke('text').as('artistName');
      });

    cy.clickFirstArtist();
    cy.wait('@getArtistDetails');
    cy.waitForArtistDetailsToLoad();

    cy.get('@artistName').then(artistName => {
      cy.get('[data-testid="artist-name"]').should('contain.text', artistName);
    });
  });

  it('deve permitir reproduzir uma música do artista', () => {
    cy.visitArtistsList();
    cy.wait('@getArtists');
    cy.waitForArtistsToLoad();

    cy.clickFirstArtist();
    cy.wait('@getArtistDetails');
    cy.wait('@getArtistTracks');
    cy.waitForArtistDetailsToLoad();

    cy.get('[data-testid="track-item"]').first().find('[data-testid="play-button"]').click();

    cy.get('[data-testid="player-controls"]', { timeout: 10000 }).should('be.visible');

    cy.get('[data-testid="current-track-name"]').should('be.visible').should('not.be.empty');
  });

  it('deve navegar de volta para a lista de artistas', () => {
    cy.visitArtistsList();
    cy.wait('@getArtists');
    cy.waitForArtistsToLoad();

    cy.clickFirstArtist();
    cy.wait('@getArtistDetails');
    cy.waitForArtistDetailsToLoad();

    cy.get('[data-testid="back-to-artists"]').click();

    cy.url().should('include', '/artists');
    cy.get('[data-testid="artists-list"]').should('be.visible');
  });

  it('deve lidar com erro de carregamento', () => {
    cy.intercept('GET', '**/artists**', { statusCode: 500 }).as('getArtistsError');

    cy.visitArtistsList();
    cy.wait('@getArtistsError');

    cy.get('[data-testid="error-message"]').should('be.visible').should('contain.text', 'Erro');
  });
});

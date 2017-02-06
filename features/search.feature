Feature: Busca
  Para buscar informações
  Como um usuário do sistema
  Eu gostaria de poder ter um campo de busca rápida

  Scenario: Busca CPF
    Given I am on the search page
    When I fill the search input
    Then I should see the results of my search

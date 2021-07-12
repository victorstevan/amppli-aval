

export const grid_locale = {
    // Root
    noRowsLabel: 'Sem linhas',
    noResultsOverlayLabel: 'Nenhum resultado.',
    errorOverlayDefaultLabel: 'Erro inesperado.',
  
    // Density selector toolbar button text
    toolbarDensity: 'Densidade',
    toolbarDensityLabel: 'Densidade',
    toolbarDensityCompact: 'Compacto',
    toolbarDensityStandard: 'Padrão',
    toolbarDensityComfortable: 'Confortável',
  
    // Columns selector toolbar button text
    toolbarColumns: 'Colunas',
    toolbarColumnsLabel: 'Selecionar coluna',
  
    // Filters toolbar button text
    toolbarFilters: 'Filtros',
    toolbarFiltersLabel: 'Mostrar filtros',
    toolbarFiltersTooltipHide: 'Esconder filtros',
    toolbarFiltersTooltipShow: 'Mostrar filtros',
    toolbarFiltersTooltipActive: (count) =>
      count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
  
    // Export selector toolbar button text
    toolbarExport: 'Exportar',
    toolbarExportLabel: 'Exportar',
    toolbarExportCSV: 'Baixar como CSV',
  
    // Columns panel text
    columnsPanelTextFieldLabel: 'Achar colunar',
    columnsPanelTextFieldPlaceholder: 'Titulo da coluna',
    columnsPanelDragIconLabel: 'Reordenar coluna',
    columnsPanelShowAllButton: 'Mostrar tudo',
    columnsPanelHideAllButton: 'Esconder tudo',
  
    // Filter panel text
    filterPanelAddFilter: 'Adicionar filtro',
    filterPanelDeleteIconLabel: 'Deletar',
    filterPanelOperators: 'Operadores',
    filterPanelOperatorAnd: 'e',
    filterPanelOperatorOr: 'Ou',
    filterPanelColumns: 'Colunas',
    filterPanelInputLabel: 'Valor',
    filterPanelInputPlaceholder: 'Filtrar valor',
  
    // Filter operators text
    filterOperatorContains: 'contem',
    filterOperatorEquals: 'igual',
    filterOperatorStartsWith: 'começa com',
    filterOperatorEndsWith: 'termina com',
    filterOperatorIs: 'é',
    filterOperatorNot: 'não é',
    filterOperatorAfter: 'depois de',
    filterOperatorOnOrAfter: 'entre ou depois de',
    filterOperatorBefore: 'é antes',
    filterOperatorOnOrBefore: 'entre ou antes',
    filterOperatorIsEmpty: 'é vazio',
    filterOperatorIsNotEmpty: 'não é vazio',
  
    // Filter values text
    filterValueAny: 'qualquer',
    filterValueTrue: 'verdadeiro',
    filterValueFalse: 'falso',
  
    // Column menu text
    columnMenuLabel: 'Menu',
    columnMenuShowColumns: 'Mostrar colunas',
    columnMenuFilter: 'Filtrar',
    columnMenuHideColumn: 'Esconder',
    columnMenuUnsort: 'Remover ordenação',
    columnMenuSortAsc: 'Ordem crescente',
    columnMenuSortDesc: 'Ordem descrescente',
  
    // Column header text
    columnHeaderFiltersTooltipActive: (count) =>
      count !== 1 ? `${count} filtros ativos` : `${count} filtro ativo`,
    columnHeaderFiltersLabel: 'Mostrar filtros',
    columnHeaderSortIconLabel: 'Ordenar',
  
    // Rows selected footer text
    footerRowSelected: (count) =>
      count !== 1
        ? `${count.toLocaleString()} Colunas selecionadas`
        : `${count.toLocaleString()} Linhas selecionadas`,
  
    // Total rows footer text
    footerTotalRows: 'Linhas totais:',
  
    // Total visible rows footer text
    footerTotalVisibleRows: (visibleCount, totalCount) =>
      `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
  
    // Checkbox selection text
    checkboxSelectionHeaderName: 'Caixas seleção marcadas',
  
    // Boolean cell text
    booleanCellTrueLabel: 'verdadeiro',
    booleanCellFalseLabel: 'falso',
  
    // Used core components translation keys
    MuiTablePagination: {},
};
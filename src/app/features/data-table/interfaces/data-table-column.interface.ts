export interface DataTableColumn {
  name: string;
  label: string; // Ideally a translatable i18n string
  property: string;
  width?: string;
}

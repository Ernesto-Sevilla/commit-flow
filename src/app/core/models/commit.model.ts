export interface CommitType {
  value: string;
  label: string;
  description: string;
}

export const COMMIT_TYPES: CommitType[] = [
  { value: 'feat', label: 'Feature', description: 'Introduce una nueva funcionalidad al código.' },
  { value: 'fix', label: 'Fix', description: 'Corrige un error o fallo técnico (bug).' },
  { value: 'docs', label: 'Documentation', description: 'Cambios solo en la documentación.' },
  { value: 'style', label: 'Style', description: 'Cambios de formato y estética sin afectar la lógica.' },
  { value: 'refactor', label: 'Refactor', description: 'Mejora del código que no corrige errores ni añade funciones.' },
  { value: 'perf', label: 'Performance', description: 'Cambio que mejora el rendimiento del sistema.' },
  { value: 'test', label: 'Test', description: 'Añadir o corregir pruebas unitarias.' },
  { value: 'chore', label: 'Chore', description: 'Mantenimiento, herramientas o actualización de librerías.' }
];
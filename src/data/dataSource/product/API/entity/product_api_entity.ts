export interface ProductAPIEntity {
  id?: number;
  activo?: boolean;
  codigo: string;
  descripcion?: string;
  etiquetas?: string[];
  marca?: string;
  modelo?: string;
  nombre: string;
  peso?: string;
  precioLocal: string;
  precioMenor: string;
  precioNacional: string;
  urlImagen?: string;
}

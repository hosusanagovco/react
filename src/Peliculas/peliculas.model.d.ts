export interface pelicula{
    id: number;
    titulo: string;
    poster: string;
}
export interface landigPageDTC{
    enCartelera?: pelicula[];
    proximosEstrenos?: pelicula[]
}
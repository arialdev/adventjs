/**
 * Explicación:
 *  - Primero filtramos aquellos ficheros cuya última modificación sea posterior a la fecha del último backup.
 *  - A partir de aquí ya hemos terminado con los timestamps, sólo nos interesan los ids, así que nos quedamos
 *    sólo con ellos.
 *  - Luego queremos eliminar los ids repetidos, pertenecientes a las distintas modificaciones de un archivo.
 *  - Por último, ya cuando tenemos los M ejercicios solución, los ordenamos ascendentemente. Es importante hacer
 *    esta ordenación como último paso para asegurarnos no ordenar elementos de la lista que luego van a ser descargatos
 *    (estaríamos haciendo operaciones de más, penalizando el rendimiento).
*/

export default function getFilesToBackup(lastBackup, changes) {
  return changes
    .filter(file => file[1] > lastBackup)
    .map(([id,]) => id)
    .reduce((uniqueIds, id) =>
      uniqueIds.includes(id) ? uniqueIds : [...uniqueIds, id], [])
    .sort((a, b) => a - b);
}
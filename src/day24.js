/**
 * Problem description:
 El abuelo 👴 dice que ve todos los árboles de navidad iguales... La abuela 👵, en cambio, piensa que no. Que todos los
 árboles de navidad son distintos...

 Vamos a hacer una función que nos diga si dos árboles de navidad son iguales. Para ello, vamos a comparar los árboles
 que ya creamos en el reto 22.

 Tenemos que ver si ambos árboles tienen la misma estructura y los mismos valores en todas las ramas. Aquí tienes unos
 ejemplos:

 const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

 checkIsSameTree(tree, tree) // true

 const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

 checkIsSameTree(tree, tree2) // false
 checkIsSameTree(tree2, tree2) // true
 El cuñado 🦹‍♂️, que se las sabe todas, me ha dicho que tenga cuidado porque el truco del JSON.stringify puede no
 funcionar... ya que los árboles pueden ser el mismo pero el orden de representación de las ramas izquierda y derecha
 puede ser inversa...
 */

/**
 * Title: Traversing element by element, using recursion, to check if both trees are equuals.
 * Complexity: O(N); Ω(1)
 * Comment:
 * - We cannot use treeA===treeB because this comparison doesn't work for nested objects.
 * - We cannot use Stringify because this only gave us information about the nodes values, and not the tree's structure.
 * 1. First we check if both of the params are null. This means we got leaves in both trees. This condition will return True.
 * 2. If we aren't checking leaves, we must check if both of the values are the same, and we use recursive calls for
 *      their left and right subtrees. This must return true. If any of these conditions fails, the trees won't be
 *      equal. So we return the result of this logical AND's concatenation.
 */
export default function checkIsSameTree(treeA, treeB) {
    return (treeA === null && treeB === null) || (treeA?.value === treeB?.value && checkIsSameTree(treeA.left, treeB.left) && checkIsSameTree(treeA.right, treeB.right));
}

/*
This is a more readable code for the same solution:

export default function checkIsSameTree(treeA, treeB) {
  if (treeA === null && treeB === null) return true;
  if (treeA?.value !== treeB?.value) return false;
  return (
    checkIsSameTree(treeA.left, treeB.left) &&
    checkIsSameTree(treeA.right, treeB.right)
  );
}
 */


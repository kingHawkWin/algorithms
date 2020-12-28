final rawSet = Set();
final rawSetFrom = Set.from([1, 2, 3]);
final rawSetIdentity = Set.identity();
final rawSetOf = Set.of([1]);

void main() {
  print(
      'set => $rawSet => ${rawSet.runtimeType}\nset.from => $rawSetFrom => ${rawSetFrom.runtimeType}\nset.identity => $rawSetIdentity => ${rawSetIdentity.runtimeType}\nset.of => $rawSetOf => ${rawSetOf.runtimeType}');

  print(rawSetOf.length);
  print(rawSetOf.first);
  print(rawSetOf.isEmpty);
  print(rawSetOf.isNotEmpty);
  print(rawSetOf.last);
  print(rawSetOf.single);

  print(rawSetFrom.difference(rawSetOf));
  print(rawSetFrom.union(rawSetOf));
  print(rawSetFrom.intersection(rawSetOf));
}

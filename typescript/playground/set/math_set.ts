export class MathSet {
  // ∈
  public belongTo(ele: any, set: Set<T>): boolean {
    return set.has(ele)
  }
  // ∉
  public notBelongTo(ele: any, set: Set<T>): boolean {
    return !set.has(ele)
  }
  // ∪
  public union(set1: Set<T>, set2: Set<T>): Set<T> {
    return
  }
  // ∩
  public intersection(set1: Set<T>, set2: Set<T>): Set<T> {
    return
  }
  // ⊆
  public isSubset(set1: Set<T>, set2: Set<T>): Set<T> {
    return
  }
  // ⊂
  public isProperSubset(set1: Set<T>, set2: Set<T>): Set<T> {
    return
  }
  // ⊄
  public isNonSubset(set1: Set<T>, set2: Set<T>): Set<T> {
    return
  }
  // ⊇
  public isSuperSet(set1: Set<T>, set2: Set<T>): Set<T> {
    return
  }
  // ⊃
  public isProperSuperSet(set1: Set<T>, set2: Set<T>): Set<T> {
    return
  }
  // ⊅
  public isNonSuperSet(set1: Set<T>, set2: Set<T>): Set<T> {
    return
  }
  // Ac
  public isComplementarySet(set1: Set<T>, Set2: Set<T>): Set<T> {
    return
  }
  // ∅
  public isEmptySet(set: Set<T>): boolean {
    return set.size === 0
  }
  // P(A)
  public powerSet(set: Set<T>): Set<Set<T>> {
    return
  }
}

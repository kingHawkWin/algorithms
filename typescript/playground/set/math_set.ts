export class MathSet {
  // ∈
  public belongTo(ele: any, set: Set<any>): boolean {
    return set.has(ele)
  }
  // ∉
  public notBelongTo(ele: any, set: Set<any>): boolean {
    return !set.has(ele)
  }
  // ∪
  public union(set1: Set<any>, set2: Set<any>): Set<any> {
    return new Set([...set1, ...set2])
  }
  // ∩
  public intersection(set1: Set<any>, set2: Set<any>): Set<any> {
    return new Set([...set1].filter(v => set2.has(v)))
  }
  // -
  public diff(set1: Set<any>, set2: Set<any>): Set<any> {
    return new Set([...set1].filter(v => !set2.has(v)))
  }
  // ⊆
  public isSubset(set1: Set<any>, set2: Set<any>): boolean {

  }
  // ⊂
  public isProperSubset(set1: Set<any>, set2: Set<any>): Set<any> {
    return
  }
  // ⊄
  public isNonSubset(set1: Set<any>, set2: Set<any>): Set<any> {
    return
  }
  // ⊇
  public isSuperSet(set1: Set<any>, set2: Set<any>): Set<any> {
    return
  }
  // ⊃
  public isProperSuperSet(set1: Set<any>, set2: Set<any>): Set<any> {
    return
  }
  // ⊅
  public isNonSuperSet(set1: Set<any>, set2: Set<any>): Set<any> {
    return
  }
  // Ac
  public isComplementarySet(set1: Set<any>, Set2: Set<any>): Set<any> {
    return
  }
  // ∅
  public isEmptySet(set: Set<any>): boolean {
    return set.size === 0
  }
  // P(A)
  public powerSet(set: Set<any>): Set<Set<any>> {
    return
  }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathSet = void 0;
class MathSet {
    // ∈
    belongTo(ele, set) {
        return set.has(ele);
    }
    // ∉
    notBelongTo(ele, set) {
        return !set.has(ele);
    }
    // ∪
    union(set1, set2) {
        return;
    }
    // ∩
    intersection(set1, set2) {
        return;
    }
    // ⊆
    isSubset(set1, set2) {
        return;
    }
    // ⊂
    isProperSubset(set1, set2) {
        return;
    }
    // ⊄
    isNonSubset(set1, set2) {
        return;
    }
    // ⊇
    isSuperSet(set1, set2) {
        return;
    }
    // ⊃
    isProperSuperSet(set1, set2) {
        return;
    }
    // ⊅
    isNonSuperSet(set1, set2) {
        return;
    }
    // Ac
    isComplementarySet(set1, Set2) {
        return;
    }
    // ∅
    isEmptySet(set) {
        return set.size === 0;
    }
    // P(A)
    powerSet(set) {
        return;
    }
}
exports.MathSet = MathSet;

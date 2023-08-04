class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        return list("".join(c) for c in product(*[[chr(ord('a') + (ord(d) - ord('2')) * 3 + i) for i in range(0 + (d > '7'), 3 + (d > '6') + (d == '9'))] for d in digits]) if c)
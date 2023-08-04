class Solution:
    def sortVowels(self, s: str) -> str:
        
        vowels, ans = 'AEIOUaeiou', ''

        sVowels = deque(sorted(filter(
                        lambda x: x in vowels, s)))

        for ch in s:
            if ch in vowels: ans+= sVowels.popleft()
            else           : ans+= ch

        return ans
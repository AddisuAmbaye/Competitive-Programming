class Solution:
    def maxTurbulenceSize(self, arr: List[int]) -> int:
        if len(arr) == 1:
            return 1
        
        shouldBeGreater = True if arr[0] < arr[1] else False
        count, maxCount = 1, 1
        i = 0
        while i < len(arr) - 1:
            if arr[i] == arr[i+1]:
                i += 1
                count = 1
                continue
            if shouldBeGreater and arr[i] < arr[i+1]:
                shouldBeGreater = not shouldBeGreater
                count += 1
                maxCount = max(maxCount, count)
                i += 1
            elif not shouldBeGreater and arr[i] > arr[i+1]:
                shouldBeGreater = not shouldBeGreater
                count += 1
                maxCount = max(maxCount, count)
                i += 1
            else:
                if arr[i] < arr[i+1]:
                    shouldBeGreater = True
                else:
                    shouldBeGreater = False
                count = 1
        return maxCount
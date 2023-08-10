class Solution:
    def majorityElement(self, nums: List[int]) -> List[int]:
        l,num1,num2,c1,c2=len(nums),0,0,0,0
        for i in nums:
            if i==num1:
                c1+=1
            elif i==num2:
                c2+=1
            elif c1==0:
                num1=i
                c1=1
            elif c2==0:
                num2=i
                c2=1
            else:
                c1-=1
                c2-=1
        ans = []
        count1 = count2 = 0
        for i in range(l):
            if nums[i] == num1:
                count1 += 1
            elif nums[i] == num2:
                count2 += 1
        if count1 > l // 3:
            ans.append(num1)
        if count2 > l // 3:
            ans.append(num2)
        return ans
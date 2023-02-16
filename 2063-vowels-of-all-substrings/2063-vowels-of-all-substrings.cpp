class Solution {
public:
    long long countVowels(string word) {
        int n = word.size();
        long long res = 0;
        for(int i=0; i<n; i++){
            if(word[i]=='a' || word[i]=='e' || word[i]=='i' || word[i]=='o' || word[i]=='u')
            {
                res += (long long)(n-i)*(long long)(i+1);
            }
        }
        return res;
    }
};
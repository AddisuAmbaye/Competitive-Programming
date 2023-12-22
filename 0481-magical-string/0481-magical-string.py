class Solution:
    def magicalString(self, n: int) -> int:
        """
        Treat all 2's as 0's and then we can use a bitmask
        """
        magic_mask = current_digit = 1
        mlen = 3
        i = 2 
        # our mask is init to 221 -> 001 i.e 1 

        while mlen < n:
            magic_mask |= current_digit << mlen
            mlen += 1
            # If we need to append 2 digits. 
            # i.e the current digit at index i is '2'
            # Append the current digit again
            if not(1 << i & magic_mask):
                magic_mask |= current_digit << mlen
                mlen += 1
            current_digit = not(current_digit)
            i += 1

        # Count the set bits
        count = 0
        magic_mask = magic_mask & ((1 << n) - 1)
        while magic_mask:
            magic_mask &= (magic_mask - 1)
            count += 1
        return count
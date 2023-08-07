class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        row = [set() for _ in range(9)]
        col = [set() for _ in range(9)]
        cur = [set() for _ in range(9)]
        for i in range(9):
            for j in range(9):
                if board[i][j] != ".":
                    val = int(board[i][j])
                    row[i].add(val)
                    col[j].add(val)
# simple arithmetic formula to get the current block id
                    cur_id = i//3 * 3 + j//3
                    cur[cur_id].add(val)
                    
        def bt(i, j):
            nonlocal solved 
            if i == 9:
                solved = True
                return
            i1 = i+(j+1)//9
            j1 = (j+1)%9
            if board[i][j] != ".":
                bt(i1, j1)
            else:
                for num in range(1, 10):
# reusing the same current block formula
                    cur_id = i//3 * 3 + j//3
                    if num not in row[i] and num not in col[j] and num not in cur[cur_id]:
                        row[i].add(num)
                        col[j].add(num)
                        cur[cur_id].add(num)
                        board[i][j] = str(num)
                        bt(i1, j1)
                        if solved == False:
                            row[i].remove(num)
                            col[j].remove(num)
                            cur[cur_id].remove(num)
                            board[i][j] = '.'
        solved = False
        bt(0, 0)
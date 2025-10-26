#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    int nextDistinctYear(int y)
    {
        y++;
        while (true)
        {
            int a = y / 1000;
            int b = (y / 100) % 10;
            int c = (y / 10) % 10;
            int d = y % 10;
            if (a != b && a != c && a != d &&
                b != c && b != d &&
                c != d)
                return y;

            y++;
        }
    }
};

int main()
{
    int y;
    cin >> y;

    Solution sol;
    cout << sol.nextDistinctYear(y) << endl;

    return 0;

}

#include <stdio.h>
int main()
{
    int size;
    printf("enter size of array: ");
    scanf("%d", &size);
    int arr[size], visit[size];
    for (int i = 0; i < size; i++)
    {
        printf("enter %d element: ", i + 1);
        scanf("%d", &arr[i]);
        visit[i] = 0;
    }
    int large = 0, second = 0;
    for (int i = 0; i < size; i++)
    {
        if (arr[i] > large)
        {
            second = large;
            large = arr[i];
        }
    }
    printf("second largest element is: %d", second);
    return 0;
}
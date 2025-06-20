#include <stdio.h>

int main(int argc, char const *argv[])
{
    int size;

    printf("enter size of array: ");
    scanf("%d", &size);

    int arr[size];

    for (int i = 0; i < size; i++)
    {
        printf("enter %d elment:-", i + 1);
        scanf("%d", &arr[i]);
    }
    int count=0, single;
    for (int i = 0; i < size; i++)
    {
        for (int j = i + 1; j < size; j++)
        {
            if (arr[i] == arr[j])
            {
                continue;
            }
            else
            {
                single = arr[i];
            }
        }
    }
    printf("single element is: %d", single);
    return 0;
}

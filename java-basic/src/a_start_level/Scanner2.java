package a_start_level;

import java.util.Scanner;

public class Scanner2 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("1번 정수를 입력하세요: ");
        int value1= scanner.nextInt();
        System.out.print("2번 정수를 입력하세요: ");
        int value2= scanner.nextInt();

        int max = (value1>value2)? value1:value2;
        System.out.println(max);


    }
}

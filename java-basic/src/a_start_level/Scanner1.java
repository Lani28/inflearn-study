package a_start_level;

import java.util.Scanner;

public class Scanner1 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);   //사용자입력받음

        System.out.print("문자열을 입력하세요: ");
        String str = scanner.nextLine(); //입력을 String 타입으로 가져온다.
        System.out.println("입력한 문자열 : "+ str);  //개행 \n

        System.out.print("정수를 입력하세요: ");
        int value = scanner.nextInt();
        System.out.println("입력한 문자열 : "+ value);

        System.out.print("실수를 입력하세요: ");
        double doubleValue = scanner.nextDouble();  //정수를 입력하면 큰수기 때문에 자동형변환으로 소수로 변환가능
        System.out.println("입력한 문자열 : "+ doubleValue);
    }
}

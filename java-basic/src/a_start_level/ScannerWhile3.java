package a_start_level;

import java.util.Scanner;

public class ScannerWhile3 {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int plusVal =0;

        while (true){
            System.out.println("정수를 입력하세요 : ");
            int value = scanner.nextInt();

            if(value==0){
                break;
            }

            plusVal += value;
            System.out.println(plusVal);
        }



    }
}

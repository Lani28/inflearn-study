package a_start_level;

import java.util.Scanner;

public class ScannerWhile1 {
    public static void main(String[] args) {
        Scanner scanner =  new Scanner(System.in);

        while (true){

            System.out.println("입력해주세요 : ");
            String str = scanner.nextLine();
            if (str.equals("exit")){
                break;
            }
            System.out.println("입력한 문자열 : "+str);
        }


    }
}

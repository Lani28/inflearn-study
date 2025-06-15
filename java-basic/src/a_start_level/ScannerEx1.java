package a_start_level;

import java.util.Scanner;

public class ScannerEx1 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("음식 이름을 입력하세요.");
        String foodName = scanner.nextLine();
        System.out.println("음식 가격을 입력하세요.");
        int foodFrice = scanner.nextInt();
        System.out.println("음식 수량을 입력하세요.");
        int foodQuantity = scanner.nextInt();
        System.out.println(foodName+foodQuantity+"를 주문했습니다. 총 가격은 "+foodFrice+"입니다.");
    }
}

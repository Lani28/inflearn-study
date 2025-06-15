package a_start_level;

import java.util.Scanner;

public class WithdrawAndDeposit {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        int amount = 0;

        while (true) {
            System.out.println("------------------------------------------");
            System.out.println(" 1.입금 | 2.출금 | 3.잔액확인 | 4.종료 ");
            System.out.println("------------------------------------------");
            System.out.print("선택: ");

            int select = scanner.nextInt(); //무한루프 피하려면 while문 안에서 받아야함.

            //case문으로 바꾸면 가독성,
            if (select == 1) {
                System.out.print("입금액을 선택하세요: ");
                int deposit = scanner.nextInt();
                amount += deposit;
            } else if (select == 2) {
                System.out.print("출금액을 선택하세요: ");
                int withdraw = scanner.nextInt();
                if(amount >= withdraw){
                    amount -= withdraw;
                }else{
                    System.out.println("잔액이 "+(amount-withdraw)+"원 부족합니다.");
                }
            } else if (select == 3) {
                System.out.println("잔액을 확인합니다. 현재잔액 : " + amount + "원");
            } else if (select == 4) {
                System.out.println("인출기능을 종료합니다.");
                return;
            } else {
                System.out.println("잘못된 입력입니다.");
            }
        }
    }
}

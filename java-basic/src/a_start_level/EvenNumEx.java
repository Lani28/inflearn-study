package a_start_level;

public class EvenNumEx {
    public static void main(String[] args) {

        //조건2개
        for(int num =2, count =1; count<=10; num +=2, count++){
            System.out.println(num);
        }
       /* for(int i =2; i<=20; i+=2){
            num = i;
            System.out.println(i + " 번"+num);
        }*/

        int count =1;
        int num =0;
        while (count<=10){
            count++;
            num +=2;
            System.out.println(num);
        }


    }
}

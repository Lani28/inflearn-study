package a_start_level;

public class WhileEx3 {
    public static void main(String[] args) {

        int sum =0;
        int max =100;
/*
        for (int i=1; i<=max; i++){
            sum += i;
            System.out.println(sum);
        }*/

        int i =1;
        while (i<=max){
            sum+=i;
            i++;
            System.out.println(sum);
        }
    }
}

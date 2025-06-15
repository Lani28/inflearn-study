package a_start_level;

public class NestedEx2 {
    public static void main(String[] args) {
        int row =6; //피라미드 돌릴 라인수

        for(int i =1; i<=row; i++){
            for(int j =1; j<=i; j++){
                System.out.print("*");
            }
            System.out.println();
        }
    }
}

package a_start_level;

public class MethodEx {
    public static void main(String[] args) {
        int a =1;
        int b =3;
        int c =4;

        int x=44;
        int y=421;
        int z=454;

        //1. 리턴값 저장하지 않고 출력만 하고 버림
        averNum(a,b,c);
        averNum(x,y,z);
        //2. 리턴값 변수로 저장 > 재사용가능
        double result1 = averNum(a, b, c);
        double result2 = averNum(x, y, z);
    }

    public static double averNum(int a, int b, int c){
        double ave =(a+b+c)/3.0;
        System.out.println("평균값: "+ave);
        return ave; //호출부로 값 돌려보냄 변수ave가 아닌 값 2.6666666666666665가 전달되는 것.
    }
}

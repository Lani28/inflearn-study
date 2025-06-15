package a_start_level;

import java.lang.reflect.Array;

public class ArrayDi {
    public static void main(String[] args) {
        //2차원배열 리팩토링 하기

        //int[][] arr = new int[2][3]; //정수 배열 변수명 = 객체 정수 배열길이;
        //선언과 초기화를 할때, new int [][] 를 생략하는 축약형으로 중괄호값만 써도 된다. 1차원도 마찬가지.
        int [][] arr = new int [][]{
                {1,2,3},
                {4,5,6}
        };

        /*arr[0][0] = 1;
        arr[0][1] = 2;
        arr[0][2] = 3;
        arr[1][0] = 4;
        arr[1][1] = 5;
        arr[1][2] = 6;*/

        for(int row = 0; row< arr.length; row++ ){ //arr.length > 전체 길이 2
//            for (int column =0; column<3; column++){
            for (int column=0; column< arr[row].length; column++){  //arr[row].length> 2행의 열길이 3
                System.out.print(arr[row][column]);
            }
            System.out.println(); //한 행 끝나면 라인 엔터
        }

    }
}

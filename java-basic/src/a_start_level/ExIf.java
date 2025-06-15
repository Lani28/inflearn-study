package a_start_level;

public class ExIf {
    public static void main(String[] args) {

        double rating = 7.1;

        if(rating <= 9){
            System.out.println("어바웃타임 추천합니다.");
        }else if(rating <= 8){
            System.out.println("토이스토리를 추천합니다.");
        }else if(rating <= 7){
            System.out.println("고질라를 추천합니다.");
        }
        // 위의 코드는 첫조건이 참이라서 출력이 1개밖에 되지 않는다. 그러나 if문으로 따로 쓰면 모든 if문을 검사하여
        // 참인것을 다 출력하므로 3가지 영화 모두 추천을 받는다. 순서를 잘 고려하자.


    }
}

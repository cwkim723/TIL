package linkedList;

public class SingleLinkedList<T> {
    public Node<T> head = null;

    public class Node<T> {
        public T data;
        public Node<T> next = null;

        public Node(T data) {
            this.data = data;
        }
    }

    public void addNode(T data) {
        if(head == null) {
            head = new Node<T>(data);
        } else {
            Node<T> node = this.head;
            while (node.next != null) {
                // node.next != null의 의미 -> 그 다음 노드가 존재한다는 의미
                node = node.next; // 맨 끝 노드로 이동
            }
            node.next = new Node<T>(data); // 맨 끝 노드 다음 노드에 새로운 노드를 삽입
        }
    }

    public void printAll() {
        if (head != null) {
            Node<T> node = this.head; // 헤드부터 시작
            System.out.println(node.data);
            while (node.next != null) {
                node = node.next;
                System.out.println(node.data);
            }
        }
    }


    public Node<T> search(T data) {
        if (this.head == null) {
            // linkedlist에 아예 데이터가 없음을 의미
            return null;
        } else {
            Node<T> node = this.head;
            while(node != null) {
                if (node.data == data) {
                    return node;
                } else {
                    node = node.next;
                }
            }
            return null;
        }
    }

    // 중간에 노드 삽입
    public void addNodeInside(T data, T isData) {
        // data: 새로 삽입할 데이터
        // isData: 삽입할 위치의 바로 앞 노드
        // 기존 노드 구성: node(12) -> node.next(99)
        // 새로운 노드 구성: node(12) -> newNode(37) -> node.next(99)
        Node<T> searchedNode = this.search(isData); // 해당 값을 가진 노드 찾기. ex. searchedNode = 12노드

        if (searchedNode == null) {
            // 해당 값을 가진 노드가 없음
            this.addNode(data);
        } else {
            Node<T> nextNode = searchedNode.next; // 기존 12노드의 next는 99노드였는데 이제는 나의 next가 99가 되어야 하므로 값을 할당해줌
            searchedNode.next = new Node<T>(data); // 기존 12노드의 next는 내가 되어야 하므로 searchedNode의 next는 새로운 노드인 나
            searchedNode.next.next = nextNode;
            // searchedNode.next = 새로운 노드인 나, earchedNode.next.next = 새로운 노드인 나의 next 포인터
            // 새로운 노드인 37노드(=나)의 next는 99노드가 되어야 함
        }
    }

    public static void main(String[] args) {
        SingleLinkedList<Integer> MyLinkedList = new SingleLinkedList<Integer>();

        MyLinkedList.addNode(1);
        System.out.println("MyLinkedList.head.data = " + MyLinkedList.head.data);
        // MyLinkedList.head.data = 1

        MyLinkedList.addNode(2);
        System.out.println("MyLinkedList.head.next = " + MyLinkedList.head.next);
        // MyLinkedList.head.next = linkedList.SingleLinkedList$Node@7a81197d

        MyLinkedList.addNode(3);

        MyLinkedList.printAll(); // 1 2 3

        System.out.println("=================================");

        MyLinkedList.addNodeInside(5, 1);

        MyLinkedList.printAll(); // 1 5 2 3

        System.out.println("=================================");

        MyLinkedList.addNodeInside(6, 3);

        MyLinkedList.printAll(); // 1 5 2 3 6

    }
}



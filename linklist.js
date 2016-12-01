function Node(data, nextNode) {
    this.data = data;
    this.nextNode = nextNode;
}
function linklist() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

//function for adding data into linklist
linklist.prototype.add = function (data) {
    temp = new Node(data, null);
    //if node is empty
    if (this.head == null) {
        this.head = temp;
        this.tail = temp;
        this.length++;
    }
    //node is not Null
    else {
        this.tail.nextNode = temp;
        this.length++;
    }
    this.tail = temp;
}

//function to search data into linklist
linklist.prototype.search = function (data) {

    current = this.head;
    while (current != null) {
        //Search Value Matches the Value in the list return true 
        if (data == current.data) {
            return true;

        }
        current = current.nextNode;
    }
    return false;
}

//funcion to insert data at specific position into linklist
linklist.prototype.insert = function (data, position) {
    l = 0;
    temp = new Node(data, null);
    previous = this.head;
    current = this.head;
    while ((l + 1) != position) {
        previous = current;
        current = current.nextNode;
        l++;
    }
    previous.nextNode = temp;
    temp.nextNode = current;
}

//function to delete data from linklist
linklist.prototype.delete = function (data1) {
    previous = this.head;
    current = this.head;
    //if the node is empty
    if (current == null) {
        System.out.println("Their is Nothing to remove");
    }
    else {
        while (data1 != current.data) {
            previous = current;
            current = current.nextNode;
        }
        if (current == this.head) {
            this.head = current.nextNode;
            current.nextNode = null;
            this.length--;
        }
        else {
            previous.nextNode = current.nextNode;
            current.nextNode = null;
            this.length--;
        }
    }
}
linklist.prototype.show = function () {
    temp = this.head;
    var d = "";
    //if linked list is empty
    if (temp == null)
        document.writeln("List is null");
    else {
        while (temp != null)//display linked list
        {
            d = d + temp.data + "=>";
            temp = temp.nextNode;

        }
    }
    document.writeln(d + "<br>");
}

var nums = new linklist();
nums.add(20);
nums.add(30);
nums.add(40);
nums.add(50);
nums.show();
nums.delete(40);
nums.show();
nums.insert(40, 3);
nums.show();


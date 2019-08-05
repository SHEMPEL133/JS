/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    if (!head) {
        return head;
    }
    var pointer = head;
    var temp = pointer;
    var count_entry = 0;
    var back = false;
    while (true) {
        if (back) {
            if (count_entry == 0) {
                break;
            }
            if (temp.entry) {
                count_entry--;
                // temp.entry = false;
                back = false;
            } else {
                temp = temp.prev;
                continue;
            }
        }
        if (temp.child != null) {
            if (temp.entry) {
                temp.entry = false;
                var a = temp.child;
                temp.child = null;
                temp = a;
            } else {
                temp = temp.child;
            }
            if (pointer.next != null) {
                count_entry++;
                pointer.child = pointer.next;
                pointer.entry = true;
            } else {
                pointer.child = null;
            }
            pointer.next = temp;
            pointer.next.prev = pointer;
            pointer = pointer.next;
            continue;
        }
        if (temp.next != null) {
            temp = temp.next;
            pointer.next = temp;
            pointer.next.prev = pointer;
            pointer = pointer.next;
            continue;
        } else {
            back = true;
        }
    }
    return head;
};

// console.log(flatten({
//     "$id": "1",
//     "next": null,
//     "prev": null,
//     "val": 1,
//     "child": {
//         "$id": "2", 
//         "next": null,
//         "prev": null,
//         "val": 2,
//         "child": {
//             "$id": "3",
//             "next": null, 
//             "prev": null, 
//             "val": 3,
//             "child": {
//                 "$id": "7",
//                 "next": null,
//                 "prev": null,
//                 "val": 7,
//                 "child": {
//                     "$id": "8",
//                     "prev": null,
//                     "next": null,
//                     "val": 8,
//                     "child": {
//                         "$id": "11",
//                         "next": null,
//                         "prev": null,
//                         "val": 11,
//                         "child": {
//                             "$id": "12",
//                             "next": null,
//                             "prev": null,
//                             "val": 12,
//                             "child": {
//                                 "$id": "9",
//                                 "next": null,
//                                 "prev": null,
//                                 "val": 9,
//                                 "child": {
//                                     "$id": "10",
//                                     "next": null,
//                                     "prev": null,
//                                     "val": 10,
//                                     "child": {
//                                         "$id": "4",
//                                         "next": null,
//                                         "prev": null,
//                                         "val": 4,
//                                         "child": {
//                                             "$id": "5",
//                                             "next": null,
//                                             "prev": null,
//                                             "val": 5,
//                                             "child": {
//                                                 "$id": "6",
//                                                 "next": null,
//                                                 "prev": null,
//                                                 "val": 6,
//                                                 "child": null,
//                                             },
//                                         },
//                                     },
//                                 },
//                             },
//                         },
//                     },
//                 },
//             }, 
//         },
//     },
// }));

console.log(flatten({ "$id": "1", "child": null, "next": { "$id": "2", "child": null, "next": { "$id": "3", "child": { "$id": "7", "child": null, "next": { "$id": "8", "child": { "$id": "11", "child": null, "next": { "$id": "12", "child": null, "next": null, "prev": { "$ref": "11" }, "val": 12 }, "prev": null, "val": 11 }, "next": { "$id": "9", "child": null, "next": { "$id": "10", "child": null, "next": null, "prev": { "$ref": "9" }, "val": 10 }, "prev": { "$ref": "8" }, "val": 9 }, "prev": { "$ref": "7" }, "val": 8 }, "prev": null, "val": 7 }, "next": { "$id": "4", "child": null, "next": { "$id": "5", "child": null, "next": { "$id": "6", "child": null, "next": null, "prev": { "$ref": "5" }, "val": 6 }, "prev": { "$ref": "4" }, "val": 5 }, "prev": { "$ref": "3" }, "val": 4 }, "prev": { "$ref": "2" }, "val": 3 }, "prev": { "$ref": "1" }, "val": 2 }, "prev": null, "val": 1 }));
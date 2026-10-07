/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {

    // Check karo array empty hai ya nahi
    if (this.length === 0) {
        return -1;
    }

    // Array ka last element return karo
    return this[this.length - 1];
};


/**
 * Example:
 */

// Example 1
let nums1 = [null, {}, 3];

console.log(nums1.last());  // 3


// Example 2
let nums2 = [];

console.log(nums2.last());  // -1
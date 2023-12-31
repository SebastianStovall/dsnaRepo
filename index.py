# Given an array of strings strs, group the anagrams together. You can return the answer in any order.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

# Example 1:

# Input: strs = ["eat","tea","tan","ate","nat","bat"]
# Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
# Example 2:

# Input: strs = [""]
# Output: [[""]]
# Example 3:

# Input: strs = ["a"]
# Output: [["a"]]


def groupAnagrams(strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        # Initialize an empty dictionary to store anagram groups
        anagrams = {}

        # Iterate through each string in the input list
        for word in strs:
            # Sort the characters in the word and use it as a key for grouping
            sorted_word = ''.join(sorted(word))

            # If the sorted word is not in the dictionary, create a new group with it
            if sorted_word not in anagrams:
                anagrams[sorted_word] = [word]
            else:
                # If the key already exists, append the word to the existing group
                anagrams[sorted_word].append(word)

        return list(anagrams.values())



# /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


# https://leetcode.com/problems/serialize-and-deserialize-bst/description/

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

import json
class Codec:

    def serialize(self, root: TreeNode) -> str:
        """Encodes a tree to a single string.
        """
        values = []
        queue = [root]

        # print("LOOOOOOOOOOOOOOOK", root)

        while(len(queue) > 0):
            curr = queue.pop(0)
            # print("CURRENT ----> ",curr)

            if curr is not None:
                values.append(curr.val)
                if curr.left:
                    queue.append(curr.left)
                else:
                    queue.append(None)
                if curr.right:
                    queue.append(curr.right)
                else:
                    queue.append(None)
            else:
                values.append(None)

        # print("RETURN VALUE --->", values)

        # iterate through loop backwards and get rid of the nulls until you hit a tree value
        i = len(values) - 1
        for item in values:
            if values[i] == None:
                values.pop(i)
                i -= 1
            else:
                break

        # print("NEW VALUES", values)
        return json.dumps(values)

    def deserialize(self, data: str) -> TreeNode:
        """Decodes your encoded data to tree.
        """
        # print("DATA FROM SERIALIZATION ----> ", json.loads(data) )
        parsed_list = json.loads(data)
        if len(parsed_list) == 0:
            return []

        root = TreeNode(parsed_list[0])
        queue = [root]
        i = 1

        while i < len(parsed_list) and queue:
            node = queue.pop(0)

            if i < len(parsed_list) and parsed_list[i] is not None:
                node.left = TreeNode(parsed_list[i])
                queue.append(node.left)
                i += 1
            else:
                i += 1

            if i < len(parsed_list) and parsed_list[i] is not None:
                node.right = TreeNode(parsed_list[i])
                queue.append(node.right)
                i += 1
            else:
                i += 1

        # print("LOOOK HERE", root)
        return root


# Your Codec object will be instantiated and called as such:
# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# tree = ser.serialize(root)
# ans = deser.deserialize(tree)
# return ans





# BETTER RUNTIME REFACTOR USING dfs() recursive function

# import json

# class Codec:
#     def serialize(self, root: TreeNode) -> str:
#         """Encodes a tree to a single string."""
#         def dfs(node):
#             if not node:
#                 return "null"
#             return str(node.val) + "," + dfs(node.left) + "," + dfs(node.right)

#         return dfs(root)

#     def deserialize(self, data: str) -> TreeNode:
#         """Decodes your encoded data to tree."""
#         def build_tree(values):
#             val = values.pop(0)
#             if val == "null":
#                 return None
#             node = TreeNode(int(val))
#             node.left = build_tree(values)
#             node.right = build_tree(values)
#             return node

#         values = data.split(",")
#         return build_tree(values)


# JS RECURSIVE dfs() function

# function serialize(root) {
#     if (!root) {
#         return "null";
#     }
#     return root.val + "," + serialize(root.left) + "," + serialize(root.right);
# }


ser = Codec()
deser = Codec()
root = TreeNode([2,1,3])
tree = ser.serialize(root)
ans = deser.deserialize(tree)
valueOfAns = ans.val

# print("ANSWER       ", valueOfAns ) # [2,1,3]



# /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# Practice with sets in python

# https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/


def findDisappearedNumbers(nums: list) -> list:

        return list( set(range(1,len(nums) + 1)) - set(nums) )

        # result = []
        # set_check = set(nums)
        # for i in range(1, len(nums) + 1):
        #     if i not in set_check:
        #         result.append(i)
        # return result

# print("ANSWER       ", findDisappearedNumbers([1,2,5,7,9,4,6,7,5]) ) # [8,3]



# /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



# https://leetcode.com/problems/longest-substring-without-repeating-characters/description/



def lengthOfLongestSubstring(self, s: str) -> int:

        # initialize two pointers: i and j
        # create a set to keep track of repeating characters in the string
        # the j pointer will act as a normal pointer when iterating through the string

        # the combination of the i and j pointer will define the range of non reoccuring characters, we can use this information
        # to keep track of the longest substring

        # on each iteration, one of two things will happen
        # if s[j] not in set ---> add the letter to the set, increment the pointer, and reassign longest
        # if s[j] in set ---> remove s[i] from the set (this process will repeat until we terminate the reoccuring character from set)
        # we will also move the i pointer to reflect changes to the search space and the longest non-reoccuring substring along with
        # the set

        # each time s[j] is found in the set, we are updating the substring range

        if len(s) == 0:
            return 0

        longest = 0
        letterSet = set()

        i = 0
        j = 0

        while i < len(s) and j < len(s):
            if s[j] not in letterSet:
                letterSet.add( s[j] )
                j += 1
                longest = max(longest, j - i)
            else:
                letterSet.remove( s[i] )
                i += 1

        return longest


# print("ANSWER       ", lengthOfLongestSubstring("abcdabc") )


# /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


# https://leetcode.com/problems/longest-common-prefix/description/


def longestCommonPrefix(strs: list) -> str:

        # iterate through the list of strings
        # have a variable called prefix
        # the shortest element in the list will be the entire prefix to start off with
        # when we hit the subsequent strings in the list, the prefix variable will be reassigned when letters dont match

        if len(strs) == 1:
            return strs[0]

        if len(strs) == 0:
            return ""

        # sort the list by the length of the string, have prefix be the shortest string in the list
        prefix = sorted( strs, key=lambda x: len(x) )[0]

        for word in strs:
            i = 0
            while i < len(prefix) and i < len(word):
                if word[i] != prefix[i]:
                    # print("DOESNT MATCH HERE ---> ", prefix[i])
                    listPrefix = list(prefix)
                    prefix = "".join( listPrefix[slice(0, i)] )
                    i = len(word) # break the loop on the next iteration, we now know the new prefix
                else:
                    i += 1
        return prefix


# /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# https://leetcode.com/problems/remove-element/description/


def removeElement(nums: list, val: int) -> int:

        k = 0
        i = 0
        og_len = len(nums)

        while i < len(nums):
            if nums[i] == val:
                nums.pop(i)
                k += 1
            else:
                i += 1

        return og_len - k


# /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

def removeDuplicates(nums: list) -> int:

        # return whats left in the array
        # set up a count with a dictionary, if count every reaches more than 1, just pop the index
        # iterate with personal i incrementer, if count > 1 when iterating, pop and dont increase index

        count = dict()
        i = 0
        removed = 0
        og_len = len(nums)

        while i < len(nums):

            # check the count
            if count.get(nums[i]) is None:
                count[ nums[i] ] = 1
            else:
                count[ nums[i] ] += 1

            # act according to the count
            if count[ nums[i] ] > 1:
                removed += 1
                nums.pop(i)
            else:
                i += 1

        return og_len - removed


# /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# https://leetcode.com/problems/spiral-matrix/description/?envType=featured-list&envId=top-interview-questions?envType=featured-list&envId=top-interview-questions

def spiralOrder(matrix):
        result = []
        new_columns = []

        while matrix:

            result += matrix[0]
            matrix.pop(0)

            if len(matrix) == 0:
                break

            new_matrix = []
            i = len(matrix[0]) - 1
            while i >= 0:
                for arr in matrix:
                    print(arr, i)
                    new_columns.append(arr[i])
                new_matrix.append(new_columns)
                new_columns = []
                i -= 1

            matrix = new_matrix

        return result


# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

# https://leetcode.com/problems/plus-one/description/?envType=featured-list&envId=top-interview-questions?envType=featured-list&envId=top-interview-questions

def plusOne(digits: list) -> list:

        # if the last digit is less than 9, simply increment by 1 then return
        last_digit = digits[len(digits) - 1]
        if last_digit < 9:
            digits[len(digits) - 1] += 1
            return digits

        for i, num in enumerate(digits[::-1]):
            last_index = (len(digits) - 1)
            curr_index = (len(digits) - 1) - i

            if num == 9:
                digits[ curr_index ] = 0
            else:
                digits[ curr_index ] += 1
                break

            if i == last_index and digits[curr_index] == 0:
                digits.insert(0, 1)
                break

        return digits


# ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


# https://leetcode.com/problems/spiral-matrix/

def spiralOrder(self, matrix: list):
        result = []
        array = []

        while matrix:

            result += matrix[0]
            matrix.pop(0)

            if len(matrix) == 0:
                break

            new_matrix = []
            i = len(matrix[0]) - 1
            while i >= 0:
                for arr in matrix:
                    print(arr, i)
                    array.append(arr[i])
                new_matrix.append(array)
                array = []
                i -= 1

            matrix = new_matrix

        return result


# // ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

# https://leetcode.com/problems/license-key-formatting/description/

def licenseKeyFormatting(s: str, k: int) -> str:
        # // determine how many parts we will use in the final string
        # // to do this, modulo the total characters in the og string and compare it to K
        # // if num characters dont fit evenely, first grouping will have 1 chracter, else, it will abide by the normal grouping for k
        # // make a new array that fits the grouping standards, making sure that we are converting all a-z to upperCase
        # // return the array as a joined string inserting hyphens
        # alphanumeric = 'abcdefghijkjlmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

        ans = []
        total = 0
        sWithoutDash = list( s.replace('-', '') )

        for char in s:
            if char != '-':
                total += 1

        groupings = None
        rem = None

        # define the structure of the groupings
        if total % k == 0:
            groupings = total // k
        else:
            groupings = total // k
            rem = total % k

        # create the new LK... handle remainder first:
        if rem is not None:
            j = 0
            remGrouping = ''
            while j < rem:
                if sWithoutDash[j].isnumeric():
                    remGrouping = remGrouping + sWithoutDash[j]
                else:
                    remGrouping = remGrouping + sWithoutDash[j].upper()
                j += 1
            ans.append(remGrouping)

        i = rem if rem is not None else 0
        while i < len(sWithoutDash):
            grouping = sWithoutDash[i: (i + k)]
            grouping = ('').join(grouping)
            if grouping.isnumeric() is False:
                grouping = grouping.upper()
            ans.append(grouping)
            i += k

        return ('-').join(ans)


# // ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

# https://leetcode.com/problems/design-hashmap/description/


class MyHashMap:

    def __init__(self):
        self.map = [None] * 1000 # set personal hash table space, for this, dont want to make a resize, so i set to 1000


    def __hash(self, key: int):
        return key % 1000  # custom hash which is very very simple, returns modulo of key with 1000 to guarentee you get index in hash table


    def put(self, key: int, value: int) -> None:
        index = self.__hash(key)
        if self.map[index] is None:
            self.map[index] = [ [key, value] ]   # if nothing been stored in this bucket, assign KVP and return
        else:
            for i, KVP in enumerate(self.map[index]):  # go through the bucket, attempt to find key, if it exists, update and return
                if KVP[0] == key:
                    self.map[index][i][1] = value
                    return
            self.map[index].append([key, value])  # if key was not found in this bucket, assign it and return

    def get(self, key: int) -> int:
        index = self.__hash(key)
        if self.map[index] is not None:  # if bucket not empty, find key and return its value
            for KVP in self.map[index]:
                if KVP[0] == key:
                    return KVP[1]
        return -1  # if bucket is empty, return -1

    def remove(self, key: int) -> None:
        index = self.__hash(key)
        if self.map[index] is not None:  # if bucket exists, find the key in the bucket and remove it
            for i, KVP in enumerate(self.map[index]):
                if KVP[0] == key:
                    self.map[index].pop(i)


# // ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

# https://leetcode.com/problems/teemo-attacking/submissions/

def findPoisonedDuration(self, timeSeries: list, duration: int) -> int:
        total_poison_time = 0
        acc = None

        for i, seconds in enumerate(timeSeries):
            poison_duration = seconds + (duration - 1)

            if i < (len(timeSeries) - 1):
                next_attack = timeSeries[i + 1]
                if next_attack - poison_duration > 0: # non accumulative
                    if acc is not None:
                        total_poison_time += ( (seconds - acc) + duration )
                        acc = None
                    else:
                        total_poison_time += duration
                else:  # accumulative
                    if acc is None:
                        acc = seconds
            else:
                if acc is not None:
                    total_poison_time += ( (seconds - acc) + duration )
                else:
                    total_poison_time += duration
        return total_poison_time


# // ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

# https://leetcode.com/problems/baseball-game/description/

def calPoints(operations: list) -> int:
    score = list()
    for op in operations:
        if op == '+':
            score.append(score[-1] + score[-2])
        elif op == 'D':
            score.append(score[-1] * 2)
        elif op == 'C':
            score.pop(-1)
        else:
            score.append(int(op))
        return sum(score)


# // ------------------------------------------------------------------------------------------------------------------------------------------------------------------ //

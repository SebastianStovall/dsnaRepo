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


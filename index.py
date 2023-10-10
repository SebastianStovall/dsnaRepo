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

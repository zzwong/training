# Below is the interface for Iterator, which is already defined for you.
#
# class Iterator(object):
#     def __init__(self, nums):
#         """
#         Initializes an iterator object to the beginning of a list.
#         :type nums: List[int]
#         """
#
#     def hasNext(self):
#         """
#         Returns true if the iteration has more elements.
#         :rtype: bool
#         """
#
#     def next(self):
#         """
#         Returns the next element in the iteration.
#         :rtype: int
#         """

class PeekingIterator(object):
    def __init__(self, iterator):
        """
        Initialize your data structure here.
        :type iterator: Iterator
        """
        self.cache = [];
        self.arr = iterator;
        

    def peek(self):
        """
        Returns the next element in the iteration without advancing the iterator.
        :rtype: int
        """
        if len(self.cache) > 0:
            return self.cache[0];
        if self.arr.hasNext():
            peekedElement = self.arr.next();
            self.cache.append(peekedElement);
            return peekedElement;
        return None;
        

    def next(self):
        """
        :rtype: int
        """
        if len(self.cache) > 0:
            return self.cache.pop(0)
        return self.arr.next();
        

    def hasNext(self):
        """
        :rtype: bool
        """
        return len(self.cache) > 0 or self.arr.hasNext();
        

# Your PeekingIterator object will be instantiated and called as such:
# iter = PeekingIterator(Iterator(nums))
# while iter.hasNext():
#     val = iter.peek()   # Get the next element but not advance the iterator.
#     iter.next()         # Should return the same value as [val].
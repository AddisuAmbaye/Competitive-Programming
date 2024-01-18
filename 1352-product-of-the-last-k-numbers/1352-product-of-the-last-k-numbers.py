class ProductOfNumbers:

    def __init__(self):
        self.prefix_products = [1]

    def add(self, num: int) -> None:
        if num == 0:
            # Reset the prefix products if the new number is 0
            self.prefix_products = [1]
        else:
            # Otherwise, update the prefix products
            self.prefix_products.append(self.prefix_products[-1] * num)

    def getProduct(self, k: int) -> int:
        if k >= len(self.prefix_products):
            return 0
        # Calculate the product of the last k numbers using prefix products
        return self.prefix_products[-1] // self.prefix_products[-k - 1]

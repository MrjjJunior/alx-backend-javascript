def pascal_triangle(n):
    """
    Returns a list of lists representing Pascal's triangle of size n.
    """
    if n <= 0:
        return []

    triangle = [[1]]  # Start with the first row

    for i in range(1, n):
        prev_row = triangle[-1]  # Get the last row of the triangle
        new_row = [1]  # First element of the row is always 1
        
        # Compute the middle elements
        for j in range(1, i):
            new_row.append(prev_row[j - 1] + prev_row[j])
        
        new_row.append(1)  # Last element of the row is always 1
        triangle.append(new_row)  # Add the new row to the triangle

    return triangle

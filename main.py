import re

# Open the file
with open('www/index.html', 'r') as file:
    data = file.read()

# Regular expression to find links
links = re.findall(r'href=[\'"]?([^\'" >]+)', data)

# Print all the links
for link in links:
    print(link)

while True:
    year_str = input("请输入一个年份：")
    if not year_str.isdigit():
        print("输入的不是整数，请重新输入")
        continue
    year = int(year_str)
    if year <= 0:
        print("输入的年份必须大于 0，请重新输入")
        continue
    if (year % 4 == 0 and year % 100 != 0) or year % 400 == 0:
        print(year, "是闰年")
    else:
        print(year, "是平年")
    break
# 这是一个控制台上的用来判断是否为平年或闰年的Python程序。
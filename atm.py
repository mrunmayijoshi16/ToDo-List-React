#atm_simulation project
import time

#basic welcome message
print("Welcome to your Bank!")
time.sleep(1)

print("Insert your card!")
time.sleep(4)

#setting the pin for new customer
pin=int(input("Enter the pin for your account: "))

print("Pin set successfully")
time.sleep(2)

#signing in the customer through the pin they have set
new=int(input("To proceed please enter your pin: "))

#entire operations and logic of atm
def atm_sim():
    #taking the balance of customer's account
    balance=int(input("Enter your current balance:Rs."))

    #asking customer which transaction to perform
    choice=int(input("""====================================================
            1 == Check balance
            2 == Deposit Money
            3 == Withdraw Money
            4 == Exit 
            Enter your choice: """))
        
    if choice == 1:
        print(f"Your current balance is Rs.{balance}")
        time.sleep(3)
            
    elif choice == 2:
        deposit=int(input("Enter the amount to be deposited: Rs."))

        #updating the balance
        balance+=deposit

        print("Amount deposited successfully!")

        #asking customer for furthur operation
        x=int(input("""====================================================
                1 == New Balance
                2 == Exit 
                Enter your choice: """))
        if x == 1:
                print(f"Your new balance is Rs.{balance}")
                time.sleep(3)
        elif x == 2:
                print("Thank you for your transaction!")
                time.sleep(3)
        else:
                print("INVALID INPUT")    
            
    elif choice == 3:
        withdraw=int(input("Enter the amount for the withdrawal: Rs."))

        #checking if withdrawal money exceeds current balance
        if withdraw>balance:
            print("Your withdrawal amount exceeds your current balance!")

        else:
            print("Your transaction is under process...")
            time.sleep(3)

            #updating the balance
            balance-=withdraw

            print("Collect your money!")

            #asking customer for furthur operation
            x=int(input("""====================================================
                    1 == New Balance
                    2 == Exit 
                    Enter your choice: """))

            if x == 1:
                print(f"Your new balance is Rs.{balance}")
                time.sleep(3)
            elif x == 2:
                print("Thank you for your transaction!")
            else:
                print("INVALID INPUT")

    elif choice == 4:
        print("Thank you.Have a nice day!")
    
    else:
        print("INVALID INPUT")

#if pin entered by customer matches the pin they have already set, then execute the entire program       
if new==pin:
    atm_sim()      

#if pin entered by customer is incorrect, then give them another chance to enter the pin             
while new!=pin:
    print("Oops!Wrong pin.")

    new=int(input("Re-enter your pin: "))

    #if customer enters correct pin in re-attempt then execute the entire program
    if new==pin:
        atm_sim()
        
    
        
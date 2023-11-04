import Link from "next/link";


export default function Problems() {


    const data = [
        {
            "qton_id": "FactorialFunction",
            "qton_description": "Write a function that returns the factorial of a number.",
            "qton_points": 5,
            "test_case": 1,
            "admin_id": "A123"
        },
        {
            "qton_id": "PalindromeChecker",
            "qton_description": "Implement a function to check if a string is a palindrome.",
            "qton_points": 8,
            "test_case": 2,
            "admin_id": "A124"
        },
        {
            "qton_id": "LargestArrayElement",
            "qton_description": "Create a function that finds the largest element in an array.",
            "qton_points": 6,
            "test_case": 1,
            "admin_id": "A125"
        },
        {
            "qton_id": "FirstNonRepeatingCharacter",
            "qton_description": "Write a function to find the first non-repeated character in a string.",
            "qton_points": 7,
            "test_case": 2,
            "admin_id": "A126"
        },
        {
            "qton_id": "ReverseLinkedList",
            "qton_description": "Implement a function to reverse a linked list.",
            "qton_points": 5,
            "test_case": 1,
            "admin_id": "A127"
        },
        {
            "qton_id": "MergeSortedArrays",
            "qton_description": "Create a function to merge two sorted arrays into one sorted array.",
            "qton_points": 6,
            "test_case": 2,
            "admin_id": "A128"
        },
        {
            "qton_id": "PrimeNumbersFinder",
            "qton_description": "Write a function to find all prime numbers up to a given number.",
            "qton_points": 7,
            "test_case": 1,
            "admin_id": "A129"
        },
        {
            "qton_id": "RemoveArrayDuplicates",
            "qton_description": "Implement a function to remove duplicates from an array.",
            "qton_points": 8,
            "test_case": 2,
            "admin_id": "A130"
        },
        {
            "qton_id": "BinarySearch",
            "qton_description": "Write a function to implement binary search in a sorted array.",
            "qton_points": 5,
            "test_case": 1,
            "admin_id": "A131"
        },
        {
            "qton_id": "PrimeNumberChecker",
            "qton_description": "Create a function to check if a number is a prime number.",
            "qton_points": 6,
            "test_case": 2,
            "admin_id": "A132"
        }
    ]

    return (
        <div>
            {data.map((i) => (
                <Link href={`problems/${i.qton_id}`} key={i.qton_id}>
                    <div className="border border-gray-800 p-1 mb-2 mx-5 my-1 hover:border-blue-900 cursor-pointer">
                        <div className="bg-gray-300 flex justify-between items-center p-2">
                            <div className="text-l mx-2 font-semibold">{i.qton_id}</div>
                            <div className="border border-black ">{i.qton_points} points</div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
'use client';

export default function Test() {
    function testAlert() {
        alert('teste');
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-6">
            <div className="w-[90%] justify-items-center text-[24px] font-[800]">
                <p className="">Teste</p>
            </div>
            <div>
                <button
                    onClick={testAlert}
                    className="bg-[#FF5A14] px-18 py-2 m-2 rounded-[120px] hover:bg-[#A33A0D]">
                    Alerta
                </button>
            </div>
        </main>
    );
}
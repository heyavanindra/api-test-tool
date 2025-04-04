import { useState } from "react";
import axios, { AxiosError } from "axios";

export interface TestResultsTypes {
  endPoint: string;
  statusCode: number;
  responseTime: number;
  passed: boolean;
}

const ApiTest = () => {
  const [api, setApi] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<TestResultsTypes | null>(null);
  const [error, setError] = useState("");

  async function handleClick() {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post<TestResultsTypes>(
        `${import.meta.env.VITE_API_URL}/testapi`,
        { api: api }
      );
      setApiResponse(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      setError(axiosError.message);
    }
    setLoading(false);
  }

  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col justify-center items-center px-4 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide">
        API Testing Tool
      </h1>

      <input
        className="bg-white text-black border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-amber-400 transition mb-4"
        type="text"
        placeholder="Enter API URL"
        value={api}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setApi(e.target.value);
        }}
      />

      <button
        className="px-6 py-2 bg-amber-400 text-black font-semibold rounded-lg hover:bg-amber-300 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
        onClick={handleClick}
        disabled={loading || !api}
      >
        {loading ? "Testing..." : "Test API"}
      </button>

      {error && (
        <div className="mt-4 text-red-500 text-sm">
          {error}
        </div>
      )}

      {apiResponse && (
        <div className="mt-8 p-6 w-[22rem] bg-white text-black rounded-xl shadow-lg animate-fade-in space-y-2">
          <h2 className="text-lg font-bold text-center mb-2">Test Result</h2>
          <p>
            <strong>Endpoint:</strong> {apiResponse.endPoint}
          </p>
          <p>
            <strong>Response Time:</strong> {apiResponse.responseTime} ms
          </p>
          <p>
            <strong>Status Code:</strong> {apiResponse.statusCode}
          </p>
          <p>
            <strong>Result:</strong>{" "}
            <span
              className={apiResponse.passed ? "text-green-600" : "text-red-600"}
            >
              {apiResponse.passed ? "Passed ✅" : "Failed ❌"}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ApiTest;

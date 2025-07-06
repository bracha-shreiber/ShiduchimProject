// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Box, TextField, MenuItem, Button, InputAdornment, Paper } from "@mui/material"
// import SearchIcon from "@mui/icons-material/Search"
// import { useDispatch } from "react-redux"
// import type { AppDispatch } from "../../store/store"
// // Import your search action here
// // import { searchFiles } from '../../store/filesStore';

// interface SearchField {
//   value: string
//   label: string
//   type: "text" | "number"
// }

// const SearchComponent: React.FC = () => {
//   const dispatch = useDispatch<AppDispatch>()

//   // Define search fields
//   const searchFields: SearchField[] = [
//     { value: "firstName", label: "שם פרטי", type: "text" },
//     { value: "lastName", label: "שם משפחה", type: "text" },
//     { value: "age", label: "גיל", type: "number" },
//     { value: "fatherName", label: "שם האב", type: "text" },
//     { value: "motherName", label: "שם האם", type: "text" },
//     { value: "height", label: "גובה", type: "number" },
//     { value: "occupation", label: "עיסוק", type: "text" },
//     { value: "placeOfStudy", label: "מקום לימודים", type: "text" },
//     { value: "address", label: "כתובת", type: "text" },
//   ]

//   // State for selected field and search value
//   const [selectedField, setSelectedField] = useState<string>("firstName")
//   const [searchValue, setSearchValue] = useState<string>("")
//   const [isExpanded, setIsExpanded] = useState<boolean>(false)

//   // Get the current field type
//   const getCurrentFieldType = (): "text" | "number" => {
//     const field = searchFields.find((f) => f.value === selectedField)
//     return field ? field.type : "text"
//   }

//   // Handle search
//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault()

//     if (!searchValue.trim()) return

//     // Here you would dispatch your search action
//     // For example:
//     // dispatch(searchFiles({ field: selectedField, value: searchValue }));

//     console.log(`Searching for ${searchValue} in field ${selectedField}`)

//     // Close the expanded view after search
//     setIsExpanded(false)
//   }

//   return (
//     <Paper
//       elevation={3}
//       sx={{
//         p: 3,
//         mb: 4,
//         borderRadius: 2,
//         backgroundColor: "white",
//         position: "relative",
//         transition: "all 0.3s ease",
//         maxWidth: isExpanded ? "100%" : "500px",
//         marginRight: "auto",
//         marginLeft: 0,
//         boxShadow: isExpanded ? "0 8px 25px rgba(0, 0, 0, 0.15)" : "0 4px 15px rgba(0, 0, 0, 0.08)",
//       }}
//     >
//       <form onSubmit={handleSearch}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: isExpanded ? "column" : "row",
//             alignItems: isExpanded ? "stretch" : "center",
//             gap: 2,
//           }}
//         >
//           {isExpanded && (
//             <TextField
//               select
//               fullWidth
//               label="חפש לפי"
//               value={selectedField}
//               onChange={(e) => setSelectedField(e.target.value)}
//               variant="outlined"
//               sx={{
//                 direction: "rtl",
//                 "& .MuiOutlinedInput-root": {
//                   "&:hover fieldset": {
//                     borderColor: "#722F37",
//                   },
//                   "&.Mui-focused fieldset": {
//                     borderColor: "#722F37",
//                   },
//                 },
//                 "& .MuiInputLabel-root.Mui-focused": {
//                   color: "#722F37",
//                 },
//               }}
//             >
//               {searchFields.map((field) => (
//                 <MenuItem key={field.value} value={field.value}>
//                   {field.label}
//                 </MenuItem>
//               ))}
//             </TextField>
//           )}

//           <TextField
//             fullWidth
//             placeholder={isExpanded ? `הזן ${searchFields.find((f) => f.value === selectedField)?.label}` : "חיפוש..."}
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//             type={getCurrentFieldType()}
//             variant="outlined"
//             onClick={() => !isExpanded && setIsExpanded(true)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon color="action" />
//                 </InputAdornment>
//               ),
//             }}
//             sx={{
//               direction: "rtl",
//               "& .MuiOutlinedInput-root": {
//                 "&:hover fieldset": {
//                   borderColor: "#722F37",
//                 },
//                 "&.Mui-focused fieldset": {
//                   borderColor: "#722F37",
//                 },
//               },
//               "& .MuiInputLabel-root.Mui-focused": {
//                 color: "#722F37",
//               },
//             }}
//           />

//           {isExpanded && (
//             <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-start" }}>
//               <Button
//                 type="submit"
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#722F37",
//                   "&:hover": {
//                     backgroundColor: "#cc0000",
//                   },
//                   borderRadius: "4px",
//                   padding: "10px 20px",
//                 }}
//               >
//                 חפש
//               </Button>

//               <Button
//                 variant="outlined"
//                 onClick={() => {
//                   setIsExpanded(false)
//                   setSearchValue("")
//                 }}
//                 sx={{
//                   borderColor: "#722F37",
//                   color: "#722F37",
//                   "&:hover": {
//                     borderColor: "#cc0000",
//                     backgroundColor: "rgba(255, 0, 0, 0.04)",
//                   },
//                   borderRadius: "4px",
//                   padding: "10px 20px",
//                 }}
//               >
//                 בטל
//               </Button>
//             </Box>
//           )}
//         </Box>
//       </form>
//     </Paper>
//   )
// }

// export default SearchComponent
// components/SearchComponent.tsx
// import { useEffect, useRef, useState } from "react";
// import { useDispatch } from "react-redux";
// // import { AppDispatch } from "@/redux/store";
// // import { searchFiles } from "@/redux/slices/fileSlice";
// import { SearchIcon, X } from "lucide-react";
// import { AppDispatch } from "../../store/store";
// import { searchFiles } from "../../store/filesStore";

// const fields = [
//   { value: "firstName", label: "שם פרטי" },
//   { value: "lastName", label: "שם משפחה" },
//   { value: "height", label: "גובה" },
//   { value: "age", label: "גיל" },
//   { value: "fathername", label: "שם אב" },
//   { value: "mothername", label: "שם אם" },
// ];

// export default function SearchComponent() {
//   const dispatch = useDispatch<AppDispatch>();
//   const containerRef = useRef<HTMLDivElement>(null);

//   const [searchValue, setSearchValue] = useState("");
//   const [selectedField, setSelectedField] = useState("firstName");
//   const [isExpanded, setIsExpanded] = useState(false);
// const userIdString = sessionStorage.getItem("userId");
// const userId = userIdString ? parseInt(userIdString) : 0;

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(event.target as Node)
//       ) {
//         setIsExpanded(false);
//         setSearchValue("");
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);

//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         setIsExpanded(false);
//         setSearchValue("");
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   const handleSearch = () => {
//     if (!searchValue.trim()) return;
//     dispatch(searchFiles({userId, field: selectedField, value: searchValue.trim() }));
//     setIsExpanded(false);
//   };

//   const handleCancel = () => {
//     setSearchValue("");
//     setSelectedField("firstName");
//     dispatch(searchFiles({userId, field: "", value: "" })); // reset results
//     setIsExpanded(false);
//   };

//   return (
//     <div ref={containerRef} className="relative w-full max-w-xs">
//       {!isExpanded ? (
//         <button
//           title="פתח חיפוש"
//           onClick={() => setIsExpanded(true)}
//           className="p-2 bg-gray-200 rounded-full"
//         >
//           <SearchIcon />
//         </button>
//       ) : (
//         <div className="flex items-center gap-2 p-2 bg-white border rounded shadow">
//           <select
//             value={selectedField}
//             onChange={(e) => setSelectedField(e.target.value)}
//             className="border rounded px-2 py-1"
//             aria-label="שדה חיפוש"
//           >
//             {fields.map((field) => (
//               <option key={field.value} value={field.value}>
//                 {field.label}
//               </option>
//             ))}
//           </select>
//           <input
//             type="text"
//             className="border px-2 py-1 rounded w-full"
//             placeholder="הקלד לחיפוש..."
//             value={searchValue}
//             onChange={(e) => setSearchValue(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//             aria-label="טקסט לחיפוש"
//           />
//           <button
//             onClick={handleSearch}
//             className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//           >
//             חפש
//           </button>
//           <button
//             onClick={handleCancel}
//             className="text-gray-500 hover:text-red-500"
//             title="ביטול"
//           >
//             <X />
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


import {  useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { fetchFilesByUserId, searchFiles } from "../../store/filesStore";
// import { LocationCity } from "@mui/icons-material";

export default function SearchComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const containerRef = useRef<HTMLDivElement>(null);

  const userIdString = sessionStorage.getItem("userId");
  const userId = userIdString ? parseInt(userIdString) : 0;

  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    age: "",
    fatherName: "",
    motherName: "",
    height: "",
    placeOfStudy: "",
    occupation: "",
    city: "",
  });

  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    const activeFilters = Object.entries(filters)
      .filter(([_, value]) => value.trim() !== "")
      .map(([field, value]) => ({ field, value }));

    dispatch(searchFiles({ userId, filters: activeFilters }));
  };

  const handleClear = () => {
    setFilters({
      firstName: "",
      lastName: "",
      age: "",
      fatherName: "",
      motherName: "",
      height: "",
      placeOfStudy: "",
      occupation: "",
      city: "",
    });
    setShowMoreFilters(false);
    // dispatch(searchFiles({ userId, filters: [] }));
          dispatch(fetchFilesByUserId(Number(userId)))
    
  };

  return (
    <div
      ref={containerRef}
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        maxWidth: "600px",
        marginBottom: "1.5rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          placeholder="First Name"
          value={filters.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Last Name"
          value={filters.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Age"
          value={filters.age}
          onChange={(e) => handleChange("age", e.target.value)}
          style={inputStyle}
        />
      </div>

      {showMoreFilters && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
          <input
            placeholder="Father's Name"
            value={filters.fatherName}
            onChange={(e) => handleChange("fatherName", e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Mother's Name"
            value={filters.motherName}
            onChange={(e) => handleChange("motherName", e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Height"
            value={filters.height}
            onChange={(e) => handleChange("height", e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Place of Study"
            value={filters.placeOfStudy}
            onChange={(e) => handleChange("placeOfStudy", e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="Occupation"
            value={filters.occupation}
            onChange={(e) => handleChange("occupation", e.target.value)}
            style={inputStyle}
          />
          <input
            placeholder="City"
            value={filters.city}
            onChange={(e) => handleChange("city", e.target.value)}
            style={inputStyle}
            />
        </div>
      )}

      {!showMoreFilters && (
        <button
          onClick={() => setShowMoreFilters(true)}
          style={{ marginBottom: "1rem", background: "none", border: "none", color: "#722F37", cursor: "pointer" }}
        >
          ➕ More
        </button>
      )}

      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={handleSearch} style={buttonStyle}>
          Search
        </button>
        <button onClick={handleClear} style={{ ...buttonStyle, backgroundColor: "#e0e0e0", color: "#333" }}>
          Reset
        </button>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  flex: "1",
  padding: "0.5rem",
  borderRadius: "4px",
  border: "1px solid #ccc",
  minWidth: "150px",
};

const buttonStyle: React.CSSProperties = {
  padding: "0.5rem 1rem",
  backgroundColor: "#722F37",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
